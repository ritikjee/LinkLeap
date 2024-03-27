import React from "react";

import { ConnectionsProvider } from "@/providers/connections-provider";
import EditorProvider from "@/providers/editor-provider";
import EditorCanvas from "./_components/editor-canvas";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { notFound } from "next/navigation";

type Props = {
  workflowId: string;
};

async function EditorPage({ workflowId }: Props) {
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
