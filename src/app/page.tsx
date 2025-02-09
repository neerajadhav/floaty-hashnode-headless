import { AboutMe } from '@/components/AboutMe';
import { Blogs } from '@/components/Blogs';
import { ContactMe } from '@/components/ContactMe';
import { Container } from '@/components/Container';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';

export default async function Home() {
  return (
    <Container>
      <AboutMe />
      <Skills />
      <div className='flex flex-col gap-6 lg:flex-row'>
        <Blogs />
        <Projects />
      </div>
      <ContactMe />
    </Container>
  );
}
