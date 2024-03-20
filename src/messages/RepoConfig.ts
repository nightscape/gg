// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { DisplayPath } from "./DisplayPath";
import type { RepoStatus } from "./RepoStatus";

export type RepoConfig = { "type": "Initial" } | { "type": "Workspace", absolute_path: DisplayPath, git_remotes: Array<string>, default_query: string, latest_query: string, status: RepoStatus, theme: string | null, indicate_disconnected_branches: boolean, } | { "type": "TimeoutError" } | { "type": "LoadError", absolute_path: DisplayPath, message: string, } | { "type": "WorkerError", message: string, };