import { fetchNotes } from "@/lib/api";
import Notes from "@/app/notes/Notes.client";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";

export default async function FilterDefaultPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["notes", "", 1, "all"],
        queryFn: () => fetchNotes({ search: "", page: 1, tag: "all" }),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Notes tag="all" />
        </HydrationBoundary>
    );
}
