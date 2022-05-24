import type { Danger } from './types/danger';
declare let danger: Danger;

import { PluginOptions } from './interfaces/options';
import { getJiraIssuesFromLocation, getIssueLocation } from './utils';

function initOptions(options: PluginOptions): PluginOptions {
  const defaultOptions: PluginOptions = {
    key: '',
    url: '',
    emoji: '',
    format: (emoji: string, urls: string[]) => `${emoji} ${urls.join(' ')}`,
    location: 'title',
    provider: 'github',
  };
  return { ...defaultOptions, ...options };
}

export default function jiraIssues(options: PluginOptions) {
  const { key, url, emoji, format, location, provider }: PluginOptions = initOptions(options);

  const jiraKeys = Array.isArray(key) ? `(${key.join('|')})` : key;

  const jiraLocation = getIssueLocation(location, provider, danger);
}
