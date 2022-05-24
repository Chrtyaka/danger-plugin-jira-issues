export class LocationNotFound extends Error {
  constructor(location: string) {
    super(`No issues found with the location "${location}"`);
  }
}

export class GitProviderNotFound extends Error {
  constructor(provider: string) {
    super(`No issues found with the provider "${provider}"`);
  }
}
