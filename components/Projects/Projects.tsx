import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/components/Projects/Projects.module.scss';
import Title from '../Title/Title';

interface Project {
  id: number;
  title: string;
  description: string;
  photo: string;
  tag: string;
}

const Projects: React.FC = () => {
  const [data, setData] = useState<{ projects: Project[] } | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/projects');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const tags: string[] = data ? [...new Set(data.projects.map((project: Project) => project.tag))] : [];

  const handleTagButtonClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
    setFadeIn(true);
    setTimeout(() => {
      setFadeIn(false);
      // Hide previous set of items after a short delay (500ms here, adjust as needed)
      setTimeout(() => {
        setData((prevData) => ({
          ...prevData,
          projects: prevData?.projects || [],
        }));
      }, 300);
    }, 300); // Adjust the delay time to match your CSS transition time
  };

  return (
    <div className={styles.projects__wrapper}>
      {data ? (
        <div className={styles.projects}>
          <Title firstLine="Some of our" secondLine="recent projects" />

          <div className={styles.tag__buttons}>
            <button
              className={`${styles.tag__button} ${selectedTag === null ? styles.active : ''}`}
              onClick={() => handleTagButtonClick(null)}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                className={`${styles.tag__button} ${selectedTag === tag ? styles.active : ''}`}
                onClick={() => handleTagButtonClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className={styles.project__gallery}>
            {data.projects
              .filter((project: Project) => selectedTag === null || project.tag === selectedTag)
              .map((project: Project) => (
                <div className={`${styles.project__card} ${fadeIn ? styles.fadeIn : ''}`}
                key={project.id}>
                  <Image
                    src={project.photo}
                    alt={project.title}
                    className={styles.project__image}
                    fill={true}
                    priority
                  />
                  <div className={styles.project__card__overlay}>
                    <h4 className={styles.project__title}>{project.title}</h4>
                    <p className={styles.project__description}>{project.description}</p>
                    <a className={styles.project__link} href="">
                      Full project
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Projects;