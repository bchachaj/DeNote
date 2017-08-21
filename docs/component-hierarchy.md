## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**Home**
 - HomeContainer
 - Sidebar

**NotesContainer**
 - NotesDetail
  * NoteIndex

**NotebookContainer**
 - NotebookHeader
  + NotebookIndex


**NoteIndex**
 - NoteIndexItem
  + NoteDetail
    + NoteTools
    - NotebookSearch
    - Tags
      - Tag
    * Note

**NewNoteContainer**
 - NewNote

**NewNotebook**
 - NewNotebook

**TagContainer**
 - NewTag


## Routes

|Path   | Component   |
|-------|-------------|
 "/sign-up" | "AuthFormContainer"
 "/sign-in" | "AuthFormContainer"
| "/home" | "HomeContainer" |
| "/home/note/:noteId" | "NotesContainer" |
| "/home/notebook/:notebookId/note/:noteId" | "NotebookContainer" |
| "/home/tag/:tagId/note/:notedId" | "TagContainer" |
| "/new-note" | "NewNoteContainer" |
| "/new-notebook" | "NewNotebook" |
| "/new-tag" | "NewTag" |
