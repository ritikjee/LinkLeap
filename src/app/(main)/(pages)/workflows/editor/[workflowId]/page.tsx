import { ConnectionsProvider } from "@/providers/connections-provider";
import EditorProvider from "@/providers/editor-provider";
import EditorCanvas from "./_components/editor-canvas";

async function EditorPage() {
  //WIP:SECURITY: check if user is logged in and has access to this workflow

  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas />
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
}

export default EditorPage;
