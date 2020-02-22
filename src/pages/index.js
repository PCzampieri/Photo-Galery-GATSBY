import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Image from "gatsby-image";

import Header from "../components/Header";

import "../assets/styles.css";

const Index = () => {
  const images = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        edges {
          node {
            childImageSharp {
              id
              fluid(maxWidth: 480, maxHeight: 240) {
                ...GatsbyImageSharpFluid
              }
            }
            relativePath
          }
        }
      }
    }
  `);
  return (
    <>
      <Header />
      <div>
        <div className="grid max-w-4xl grid-cols-2 gap-4 mx-auto">
          {images.allFile.edges.map(image => {
            return (
              <div className="shadow">
                <Link to={`/image/${image.node.relativePath}`}>
                  <Image
                    className="rounded-t"
                    fluid={image.node.childImageSharp.fluid}
                  />
                  <p className="p-6">{image.node.relativePath}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-t mt-6 p-6">
        <p className="max-w-4xl mx-auto">
          Site desenvolvido no curso Power Sites
        </p>
      </div>
    </>
  );
};

export default Index;
