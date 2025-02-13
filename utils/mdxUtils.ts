import path from "path"
import glob from "glob"
import toc from "markdown-toc-unlazy"
import { LessonTableOfContents } from "../types/common"

export const CONTENT_PATH = path.join(process.cwd(), "content/courses")

export const allContentFilePaths = glob
  .sync("content/courses/**/*")
  .filter((path) => /\.mdx?$/.test(path))
  .map((path) => path.replace(/^content\/courses\//, ""))

export const getToCForMarkdown = (markdown): LessonTableOfContents[] =>
  toc(markdown).json
