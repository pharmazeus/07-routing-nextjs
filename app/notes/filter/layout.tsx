import css from "./LayoutNotes.module.css";

export default function FilterLayout({
    sidebar,
    notes,
    modal,
}: {
    sidebar: React.ReactNode;
    notes: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <div className={css.container}>
            <aside className={css.sidebar}>{sidebar}</aside>
            <div className={css.notesWrapper}>{notes}</div>
            {modal}
        </div>
    );
}
