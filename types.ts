
export enum AppView {
  CHAT = 'CHAT',
  TRANSLATION = 'TRANSLATION',
  WISDOM = 'WISDOM',
  BIOGRAPHY = 'BIOGRAPHY',
  ABOUT = 'ABOUT'
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: number;
}

export interface Quote {
  text: string;
  source: string;
  explanation: string;
}

export interface TranslationResult {
  original: string;
  translation: string;
  explanation: string;
  context: string;
}
