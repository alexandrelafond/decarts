import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Gallery from "../components/gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mx-5 md:mx-auto lg:w-2/3 bg-white rounded-xl py-8 px-12">
      <h4 className="text-center">
        Nous aimerions vous faire découvrir les résultats d'une passion!
      </h4>
      <p>
        Depuis 1985 l'univers de l'art a pris une grande place dans notre vie;
        c'était notre plus grand intéret, pour ne pas dire notre folie.
      </p>
      <p>
        Nous avons été des clients fidèles de plusieurs galeries d'art bien
        connues et accumulé un grand nombre de tableaux, sculptures et autres
        objets d'art.
      </p>
      <p>
        Le temps est venu pour nous de réduire la grandeur de notre résidence;
        ce n'est pas gaieté de coeur que nous nous séparons de ces oeuvres, mais
        l'âge et l'espace oblige. Nous avons donc décidé de mettre notre
        collection en vente et nous vous invitons à y jeter un coup d'oeil.
      </p>
      <p>
        Nous espérons que vous aurez autant de plaisir et d'émotion à découvrir
        ces oeuvres que nous avons eu à les acquérir. Surtout, n'achetez pas un
        tableau ou une sculpture pour son prix, achetez parceque cela vous fait
        vibrer! Donc, n'hésitez surtout pas à{" "}
        <a
          href={"mailto:" + "jacquesdespres@sympatico.ca"}
          className="font-bold text-green-400"
        >
          communiquer
        </a>{" "}
        avec nous pour toutes informations complémentaires.
      </p>
      <p>Bienvenue dans notre monde de beauté,</p>
      <span className="font-bold italic">Francine et Jacques Després</span>
    </div>
    <h2 className="text-center my-10">La collection</h2>
    <Gallery />
  </Layout>
)

export default IndexPage
