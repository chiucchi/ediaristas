import Head from "next/head";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu cadastro e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Uchi"}
        picture={"https://github.com/chiucchi.png"}
        rating={4}
        description={"Belo Horizonte"}
      />
    </div>
  );
}
