import React, { PureComponent } from "react";
import Layout from 'antd/es/layout';
import LayoutHeader from "../../common/LayoutHeader";
import LayoutFooter from "../../common/LayoutFooter";
import Header from "../Header";
import CandidateIntro from "./CandidateIntro";
import CandidatesTable from "./CandidatesTable";
import { Typography } from "antd";

const { Paragraph } = Typography;

const spokesperson = {
    name: "Carlos Manuel",
    responsibility: "Representante do Partido na Plataforma"
};

const party = {
    name: "Partido Fictício Português",
    acronym: "PFP",
    website: "www.partido.pt",
    url: "#"
};

const candidates = {
    main: [
        "Haroldo Montenegro",
        "Benedito Pacheco",
        "Hélder Cortes",
        "Xavier Venâncio",
        "Dinis Carneiro",
        "Helder Moreno",
        "Lourenço Góes",
        "Gervásio Carneiro",
        "Aleixo Passos",
        "Almiro Fernandes",
        "Cristiano Peres"
    ],
    alternates: [
        "Haroldo Montenegro",
        "Benedito Pacheco",
        "Hélder Cortes",
        "Xavier Venâncio",
        "Dinis Carneiro",
        "Helder Moreno",
        "Lourenço Góes",
        "Gervásio Carneiro",
        "Aleixo Passos",
        "Almiro Fernandes",
        "Cristiano Peres"
    ]
};

class Candidate extends PureComponent {
    constructor() {
        super();

        this.state = {
            parties: []
        }
    }
    render() {
        return (
            <Layout>
                <LayoutHeader />
                <Layout.Content>
                    <Header party={party} />
                    <CandidateIntro spokesperson={spokesperson}>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            lobortis eros sit amet lorem tincidunt, a bibendum elit eleifend.
                            Quisque gravida odio ac eros varius dictum. Donec lectus mauris,
                            congue id placerat et, commodo ac sem. Curabitur consectetur ut ipsum
                            ut placerat. Cras dictum gravida nisi, eu gravida dolor semper in.
                            Vestibulum ultricies libero sit amet porta auctor. Interdum et
                            malesuada fames ac ante ipsum primis in faucibus. Duis scelerisque
                            lobortis cursus. Aenean eleifend pharetra tempor. Praesent quis odio
                            ipsum.
                        </Paragraph>
                        <Paragraph>
                            Donec et fermentum est, eu sollicitudin urna. Suspendisse cursus
                            pulvinar hendrerit. Aenean eleifend, augue in bibendum bibendum, justo
                            nisi faucibus.
                        </Paragraph>
                    </CandidateIntro>
                    <CandidatesTable candidates={candidates} />
                </Layout.Content>
                <LayoutFooter />
            </Layout>
        );
    }
}

export default Candidate;
