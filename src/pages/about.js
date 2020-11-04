import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <div class="row mb-4 px-3 pt-4 pb-2 bg-wash tw-border-b-4 tw-border-gray-600">
      <div class="col-12">
        <h4>About NIAID Bioinformatics Resource Centers</h4>
        <p>The Bioinformatics Resource Centers (BRCs) for Infectious Diseases program was initiated in 2004 with the main objective of providing public access to computational platforms and analysis tools that enable  collecting, archiving, updating, and integrating a variety of genomics and related research data relevant to infectious diseases, and pathogens and their interaction with hosts. </p>

        <hr />

        <h5>Main Areas of Focus</h5>
        <div className="col-8">
          <ul style={{
            listStyle: 'disc',
          }}>
            <li>To make available analytical resources, bioinformatics tools, workspaces and services for data analysis</li>
            <li>To store, update, integrate, and display the following types of data and associated metadata: genome sequence and annotation, functional genomics, proteomics, metagenomics, epidemiology, surveillance, population genetics, genotype/phenotype association, antimicrobial resistance, antigenic expression, host-pathogen interactions, host response, basic and clinical</li>
            <li>To offers bioinformatics training at the BRC sites, scientific conferences, or at the requesting institution or laboratory</li>
            <li>To respond rapidly to new and emerging pandemic threats</li>
          </ul>
        </div>


        <hr />

        <h5>Targeted Pathogens</h5>
        <p>Each BRC specializes in a different group of pathogens. Pathogens examined by the BRCs include, but are not limited to, those in the NIAID list of emerging and re-emerging infectious diseases. The BRCs specialize in the following groups of pathogens:</p>
        <div className="row">
          <div className="col-6">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Bacterial and Viral Bioinformatics Resource Center (BV-BRC)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="https://www.fludb.org/brc/home.spg?decorator=influenza" target="_blank">IRD</a>
                    <br />
                    <a href="https://www.viprbrc.org/brc/home.spg?decorator=vipr" target="_blank">ViPR</a>
                  </td>
                  <td>
                    Human viral families including influenza virus
                  </td>
                </tr>
                <tr>
                  <td><a href="https://patricbrc.org/" target="_blank">PATRIC</a></td>
                  <td>Pathogenic bacterial species and closely related species</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-6">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Eukaryotic Pathogen, Vector and Host Informatics Resource (VEuPathDB)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="https://amoebadb.org/" target="_blank">AmoebaDB</a>
                    <br />
                    <a href="https://cryptodb.org/" target="_blank">CryptoDB</a>
                    <br />
                    <a href="https://fungidb.org/" target="_blank">FungiDB</a>
                  </td>
                  <td>Eukaryotic human pathogen species including fungi and protists</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://giardiadb.org/" target="_blank">GiardiaDB</a>
                    <br />
                    <a href="https://microsporidiadb.org/" target="_blank">MicrosporidaDB</a>
                    <br />
                    <a href="https://piroplasmadb.org/" target="_blank">PiroplasmaDB</a>
                    <br />
                    <a href="https://plasmodb.org/" target="_blank">PlasmoDB</a>
                    <br />
                    <a href="https://toxodb.org/" target="_blank">ToxoDB</a>
                    <br />
                    <a href="https://trichdb.org/" target="_blank">TrichDB</a>
                    <br />
                    <a href="https://tritrypdb.org/" target="_blank">TriTrypDB</a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <a href="https://vectorbase.org/" target="_blank">VectorBase</a>
                  </td>
                  <td>Invertebrate vectors of human pathogens including insects, arachnids, and gastropods</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://hostdb.org/" target="_blank">HostDB</a>
                  </td>
                  <td>Vertebrate hosts</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://orthomcl.org/" target="_blank">OrthoMCL</a>
                  </td>
                  <td>Ortholog groups of protein sequences</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  </Layout>
)

export default AboutPage