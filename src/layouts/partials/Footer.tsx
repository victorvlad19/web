"use client";
import {useEffect, useState} from "react";
import { Modal, Button, Group } from '@mantine/core';

const Footer = () => {

  const [commitDate, setCommitDate] = useState(null);

  const date = new Date();
  const isoDateTime = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  ).toISOString();
  const lastUpdated = isoDateTime.slice(0, 10);


  useEffect(() => {
    fetch('https://api.github.com/repos/victorvlad19/web/commits/master')
        .then(response => response.json())
        .then(data => {
          // Assuming the date is available in the commit data
          if (data && data.commit && data.commit.committer && data.commit.committer.date) {
            setCommitDate(data.commit.committer.date);
          }
        })
        .catch(error => console.error('Error fetching data:', error));
  }, []);



  return (
    <footer className="bg-theme-light dark:bg-darkmode-theme-light">
      <div className="border-t border-border py-7 dark:border-darkmode-border">
        <div className="container text-center text-light dark:text-darkmode-light">
          <p className="font-bold">Drd. Victor Vlad</p>
          <a href={`mailto:victorvlad.web@gmail.com`}
             className="text-light dark:text-darkmode-light underline"

          >
            victorvlad.web@gmail.com
          </a>
          <p>  Ultima actualizare:

            {commitDate ? (
                <span> {new Date(commitDate).toLocaleString()}</span>
            ) : (
                <span>Incarcare</span>
            )}

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
