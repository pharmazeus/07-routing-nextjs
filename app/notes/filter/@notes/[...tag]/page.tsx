import { fetchNotes } from "@/lib/api";
import Notes from "../../../Notes.client";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";

export default async function FilteredNotesPage({
    params,
}: {
    params: Promise<{ tag: string[] }>;
}) {
    const { tag: tagSegments } = await params;
    const tag = tagSegments[0] || "all";

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["notes", "", 1, tag],
        queryFn: () => fetchNotes({ search: "", page: 1, tag }),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Notes tag={tag} />
        </HydrationBoundary>
    );
}
