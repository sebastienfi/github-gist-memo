export class GistFile {
	filename: string //keybase.md
	type: string //text/markdown
	language: string //Markdown
	raw_url: string //https://gist.githubusercontent.com/mojombo/b1f48e80da8ceece3707/raw/fecd787e22b05c1440fcd06e55f6778f32383ac6/keybase.md
	size: 2473

	// This is not an API Model Property but instead an easy-to-use prop to store gists files we already queried.
	content?: string
}

export interface GistFileKeyMap {
	[key: string]: GistFile[]
}

export const transformToGistFile = (obj: any): GistFile => {
	const { filename, type, language, raw_url, size } = obj
	return {
		filename,
		type,
		language,
		raw_url,
		size,
	}
}
