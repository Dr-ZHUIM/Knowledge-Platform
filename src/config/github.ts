import { GITHUB_CONST } from '@const';
import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: GITHUB_CONST.GITHUB_AUTH,
});

export async function githubRequest(url: string, path: string) {
  return await octokit.request(url, {
    owner: GITHUB_CONST.GITHUB_AUTHOR,
    repo: GITHUB_CONST.GITHUB_REPO,
    path,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
}

export async function githubFetch(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) {
  return await fetch(input, {
    ...init,
    headers: {
      Authorization: GITHUB_CONST.GITHUB_AUTH,
    },
  });
}
