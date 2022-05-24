import { GitProvider } from '../types/danger';
import { IssueLocation } from '../types/lib';

export interface PluginOptions {
  key: string | string[];
  url: string;
  emoji: string;
  format: (emoji: string, urls: string[]) => string;
  location: IssueLocation;
  provider: GitProvider;
}
