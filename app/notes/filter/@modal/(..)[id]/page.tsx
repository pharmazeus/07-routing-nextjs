import { fetchNoteById } from "@/lib/api";
import NotePreview from "@/components/NotePreview/NotePreview";
import Modal from "@/components/Modal/Modal";

export default async function InterceptedNoteModal({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const note = await fetchNoteById(id);

    return (
        <Modal>
            <NotePreview note={note} />
        </Modal>
    );
}
