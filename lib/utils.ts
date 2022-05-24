import { Danger, GitProvider } from './types/danger';
import { GitProviderNotFound, LocationNotFound } from './types/errors';
import { IssueLocation } from './types/lib';

export function makeHTMLLink(href: string, text: string) {
  return `<a href="${href}" target="_blank">${text}</a>`;
}

export function ensureUrlEndsWithSlash(url: string) {
  return url.endsWith('/') ? url : `${url}/`;
}

export function getJiraIssuesFromLocation(location: string, jiraKeys: string): string[] {
  const regex = new RegExp(`(${jiraKeys}-[0-9]+)`, 'g');
  const matches = location.match(regex);

  return matches || [];
}

export function getIssueLocation(
  location: IssueLocation,
  provider: GitProvider,
  instance: Danger,
): string | LocationNotFound | GitProviderNotFound {
  if (provider === 'github') {
    switch (location) {
      case 'title':
        return instance.github.pr.title;
      case 'branch':
        return instance.github.pr.head.ref;
      default:
        return new LocationNotFound(location);
    }
  }

  if (provider === 'gitlab') {
    switch (location) {
      case 'title':
        return instance.gitlab.mr.title;
      case 'branch':
        return instance.gitlab.mr.source_branch;
      default:
        return new LocationNotFound(location);
    }
  }

  return new GitProviderNotFound(provider);
}
