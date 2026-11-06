'use client';

import { Check, Copy } from '@/components/icons';
import { useState } from 'react';

import { Button, type ButtonSize, type ButtonVariant } from '@/components/ui/button';

interface CopyButtonProps {
  text: string;
  label: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

/** Copies `text` and says so for a moment; clipboard refusals leave it unchanged. */
export function CopyButton({ text, label, size = 'sm', variant = 'ghost' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button size={size} variant={variant} onClick={copy} aria-live="polite">
      {copied ? <Check className="pop" aria-hidden="true" /> : <Copy aria-hidden="true" />}
      {copied ? 'Copied' : label}
    </Button>
  );
}
