"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Copy, Link as LinkIcon } from "lucide-react";

interface ShareOptionsProps {
    roomId: string;
}

export function ShareOptions({ roomId }: ShareOptionsProps) {
    const { toast } = useToast();

    function copyRoomId() {
        navigator.clipboard.writeText(roomId);
        toast({
            title: "Room code copied!",
            description: "Share this code with others to let them join your room."
        });
    }

    function copyShareableLink() {
        const shareableUrl = `${window.location.origin}/join?room=${roomId}`;
        navigator.clipboard.writeText(shareableUrl);
        toast({
            title: "Shareable link copied!",
            description: "Share this link with others to let them join your room directly."
        });
    }

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Room Code</span>
                    <Button variant="ghost" size="sm" className="gap-2" onClick={copyRoomId} disabled={!roomId}>
                        <Copy className="h-4 w-4" />
                        Copy Code
                    </Button>
                </div>
                <code className="block w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-mono">{roomId || "Generating room code..."}</code>
            </div>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">or</span>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Shareable Link</span>
                    <Button variant="ghost" size="sm" className="gap-2" onClick={copyShareableLink} disabled={!roomId}>
                        <LinkIcon className="h-4 w-4" />
                        Copy Link
                    </Button>
                </div>
                <code className="block w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-mono truncate">{roomId ? `${window.location.origin}/join?room=${roomId}` : "Generating link..."}</code>
            </div>
        </div>
    );
}
