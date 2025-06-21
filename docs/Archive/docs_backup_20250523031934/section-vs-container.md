/**
 * Guide: Section vs Container Usage
 *
 * - <Section> includes <Container> by default.
 * - Use <Section container={false}> for full width.
 * - Use <Container> only outside <Section>.
 * - Never nest <Container> inside <Section> or use "container mx-auto" inside <Section>.
 * - Custom components should adapt to parent container.
 */

// Correct:
<Section>
  <Heading>Title</Heading>
  <Text>Content</Text>
</Section>

// Full width:
<Section container={false}>
  <div className="w-full bg-blue-500">Full width content</div>
</Section>

// Standalone container:
<Container>
  <div>Centered content</div>
</Container>
