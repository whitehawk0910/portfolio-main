# Graph Report - portfolio-main  (2026-08-29)

## Corpus Check
- 90 files · ~119,293 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 174 nodes · 164 edges · 12 communities detected
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 13 edges
2. `generateMetadata()` - 7 edges
3. `getBlogPost()` - 7 edges
4. `getBlogPosts()` - 6 edges
5. `companyToSlug()` - 6 edges
6. `getProductSlugs()` - 5 edges
7. `createOgMetadata()` - 5 edges
8. `getExperienceSlugs()` - 5 edges
9. `generateStaticParams()` - 4 edges
10. `ExperienceOrgLogo()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `getBlogPost()`  [INFERRED]
  src/app/projects/[slug]/page.tsx → src/data/blogPosts.ts
- `generateStaticParams()` --calls--> `getBlogPosts()`  [INFERRED]
  src/app/blog/[slug]/opengraph-image.tsx → src/data/blogPosts.ts
- `generateMetadata()` --calls--> `getBlogPost()`  [INFERRED]
  src/app/blog/[slug]/opengraph-image.tsx → src/data/blogPosts.ts
- `BlogPostOpenGraphImage()` --calls--> `getBlogPost()`  [INFERRED]
  src/app/blog/[slug]/opengraph-image.tsx → src/data/blogPosts.ts
- `ExperienceRoleCard()` --calls--> `companyToSlug()`  [INFERRED]
  src/components/ExperienceRoleCard.tsx → src/lib/experienceSlug.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (9): sitemap(), JsonLd(), getProductBySlug(), getProductSlugs(), getExperienceBySlug(), getExperienceSlugs(), createOgMetadata(), generateMetadata() (+1 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (2): ResumeActions(), cn()

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (5): ExperienceListRow(), ExperienceOrgLogo(), ExperienceRoleCard(), isCurrentRole(), companyToSlug()

### Community 3 - "Community 3"
Cohesion: 0.27
Nodes (6): getBlogPost(), getBlogPosts(), getBlogPostSlugs(), BlogPostOpenGraphImage(), generateMetadata(), generateStaticParams()

### Community 4 - "Community 4"
Cohesion: 0.36
Nodes (6): addToRemoveQueue(), dispatch(), genId(), reducer(), toast(), useToast()

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (3): AnimatedSocialLinks(), HeroCover(), PostCoverChrome()

### Community 6 - "Community 6"
Cohesion: 0.48
Nodes (4): handleClick(), handleContactClick(), isHome(), scrollToSection()

### Community 7 - "Community 7"
Cohesion: 0.43
Nodes (3): getAskAiPrompt(), getChatGptAskUrl(), getClaudeAskUrl()

### Community 8 - "Community 8"
Cohesion: 0.4
Nodes (2): handleKeyPress(), handleSubmit()

### Community 9 - "Community 9"
Cohesion: 0.4
Nodes (2): TweetLink(), parseMarkdownIntoBlocks()

### Community 10 - "Community 10"
Cohesion: 0.5
Nodes (2): loadGoogleFont(), loadOgFonts()

### Community 11 - "Community 11"
Cohesion: 0.5
Nodes (2): normalizeFetchedTweet(), normalizeTweetEntities()

## Knowledge Gaps
- **Thin community `Community 1`** (17 nodes): `BlogSocials()`, `ResumeActions()`, `cn()`, `ResumePage()`, `page.tsx`, `BlogSocials.tsx`, `PageRail.tsx`, `ResumeViewer.tsx`, `avatar.tsx`, `badge.tsx`, `button.tsx`, `dialog.tsx`, `input.tsx`, `toast.tsx`, `tooltip.tsx`, `utils.ts`, `Badge()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (6 nodes): `handleKeyPress()`, `handleOpenChat()`, `handleSubmit()`, `playNotificationSound()`, `scrollToBottom()`, `Chatbot.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (5 nodes): `TweetLink()`, `parseMarkdownIntoBlocks()`, `MemoizedMarkdown.tsx`, `TweetLink.tsx`, `markdown-parser.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (5 nodes): `loadGoogleFont()`, `loadOgFonts()`, `loadPortraitDataUrl()`, `mergeContent()`, `og-image.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (5 nodes): `TweetContent()`, `normalizeFetchedTweet()`, `normalizeTweetEntities()`, `TweetEmbed.tsx`, `normalize-tweet-entities.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `generateMetadata()` connect `Community 0` to `Community 3`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Why does `getBlogPost()` connect `Community 3` to `Community 0`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `cn()` connect `Community 1` to `Community 8`, `Community 6`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `generateMetadata()` (e.g. with `getProductBySlug()` and `getBlogPost()`) actually correct?**
  _`generateMetadata()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `getBlogPost()` (e.g. with `generateMetadata()` and `generateMetadata()`) actually correct?**
  _`getBlogPost()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `companyToSlug()` (e.g. with `ExperienceRoleCard()` and `ExperienceListRow()`) actually correct?**
  _`companyToSlug()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._