import routes from "@/routes"
import { Navbar } from "@/widgets/layout"
import { Typography } from "@material-tailwind/react"

function Politique(){
    return(
        <>
            <div className="bg-black flex justify-center mb-6">
                <Navbar routes={routes}/>
            </div>
            <div className="text-center container mx-auto">

                <Typography variant="h1" color="black" className="mb-6 font-black">
                    Politique de confidentialité
                </Typography>
                <p>Le site web https://james-ahmedaly.com/ est détenu par Ahmedaly James, qui est un contrôleur de données de vos données personnelles.</p>
                <p>Nous avons adopté cette politique de confidentialité, qui détermine la manière dont nous traitons les informations collectées par https://james-ahmedaly.com/, qui fournit également les raisons pour lesquelles nous devons collecter certaines données personnelles vous concernant. Par conséquent, vous devez lire cette politique de confidentialité avant d'utiliser le site web de https://james-ahmedaly.com/.</p>
                <p>Nous prenons soin de vos données personnelles et nous nous engageons à en garantir la confidentialité et la sécurité.</p>

                <Typography variant="h2" color="black" className="mb-6 font-black">Les informations personnelles que nous collectons :</Typography>
                <p>Lorsque vous visitez le https://james-ahmedaly.com/, nous recueillons automatiquement certaines informations sur votre appareil, notamment des informations sur votre navigateur web, votre adresse IP, votre fuseau horaire et certains des cookies installés sur votre appareil. En outre, lorsque vous naviguez sur le site, nous recueillons des informations sur les pages web ou les produits individuels que vous consultez, sur les sites web ou les termes de recherche qui vous ont renvoyé au site et sur la manière dont vous interagissez avec le site. Nous désignons ces informations collectées automatiquement par le terme "informations sur les appareils". En outre, nous pourrions collecter les données personnelles que vous nous fournissez (y compris, mais sans s'y limiter, le nom, le prénom, l'adresse, les informations de paiement, etc.) lors de l'inscription afin de pouvoir exécuter le contrat.</p>

                <Typography variant="h2" color="black" className="mb-6 font-black">Pourquoi traitons-nous vos données ?</Typography>
                <p>Notre priorité absolue est la sécurité des données des clients et, à ce titre, nous ne pouvons traiter que des données minimales sur les utilisateurs, uniquement dans la mesure où cela est absolument nécessaire pour maintenir le site web. Les informations collectées automatiquement sont utilisées uniquement pour identifier les cas potentiels d'abus et établir des informations statistiques concernant l'utilisation du site web. Ces informations statistiques ne sont pas autrement agrégées de manière à identifier un utilisateur particulier du système.</p>
                <p>Vous pouvez visiter le site web sans nous dire qui vous êtes ni révéler d'informations, par lesquelles quelqu'un pourrait vous identifier comme un individu spécifique et identifiable. Toutefois, si vous souhaitez utiliser certaines fonctionnalités du site web, ou si vous souhaitez recevoir notre lettre d'information ou fournir d'autres détails en remplissant un formulaire, vous pouvez nous fournir des données personnelles, telles que votre e-mail, votre prénom, votre nom, votre ville de résidence, votre organisation, votre numéro de téléphone. Vous pouvez choisir de ne pas nous fournir vos données personnelles, mais il se peut alors que vous ne puissiez pas profiter de certaines fonctionnalités du site web. Par exemple, vous ne pourrez pas recevoir notre bulletin d'information ou nous contacter directement à partir du site web. Les utilisateurs qui ne savent pas quelles informations sont obligatoires sont invités à nous contacter via james_ahmedaly@yahoo.com.</p>

                <Typography variant="h2" color="black" className="mb-6 font-black">Vos droits :</Typography>
                <p>Si vous êtes un résident européen, vous disposez des droits suivants liés à vos données personnelles :</p>
                <ol>
                    <li>Le droit d'être informé.</li>
                    <li>Le droit d'accès.</li>
                    <li>Le droit de rectification.</li>
                    <li>Le droit à l'effacement.</li>
                    <li>Le droit de restreindre le traitement.</li>
                    <li>Le droit à la portabilité des données.</li>
                    <li>Le droit d'opposition.</li>
                    <li>Les droits relatifs à la prise de décision automatisée et au profilage.</li>
                </ol>

                <p>Si vous souhaitez exercer ce droit, veuillez nous contacter via les coordonnées ci-dessous.</p>
                <p>En outre, si vous êtes un résident européen, nous notons que nous traitons vos informations afin d'exécuter les contrats que nous pourrions avoir avec vous (par exemple, si vous passez une commande par le biais du site), ou autrement pour poursuivre nos intérêts commerciaux légitimes énumérés ci-dessus. En outre, veuillez noter que vos informations pourraient être transférées en dehors de l'Europe, y compris au Canada et aux États-Unis.</p>
                <Typography variant="h2" color="black" className="mb-6 font-black">Liens vers d'autres sites web :</Typography>
                <p>Notre site web peut contenir des liens vers d'autres sites web qui ne sont pas détenus ou contrôlés par nous. Sachez que nous ne sommes pas responsables de ces autres sites web ou des pratiques de confidentialité des tiers. Nous vous encourageons à être attentif lorsque vous quittez notre site web et à lire les déclarations de confidentialité de chaque site web susceptible de collecter des informations personnelles.</p>

                <Typography variant="h2" color="black" className="mb-6 font-black">Sécurité de l'information :</Typography>
                <p>Nous sécurisons les informations que vous fournissez sur des serveurs informatiques dans un environnement contrôlé et sécurisé, protégé contre tout accès, utilisation ou divulgation non autorisés. Nous conservons des garanties administratives, techniques et physiques raisonnables pour nous protéger contre tout accès, utilisation, modification et divulgation non autorisés des données personnelles sous son contrôle et sa garde. Toutefois, aucune transmission de données sur Internet ou sur un réseau sans fil ne peut être garantie.</p>

                <Typography variant="h2" color="black" className="mb-6 font-black">Divulgation légale :</Typography>
                <p>Nous divulguerons toute information que nous collectons, utilisons ou recevons si la loi l'exige ou l'autorise, par exemple pour nous conformer à une citation à comparaître ou à une procédure judiciaire similaire, et lorsque nous pensons de bonne foi que la divulgation est nécessaire pour protéger nos droits, votre sécurité ou celle d'autrui, enquêter sur une fraude ou répondre à une demande du gouvernement.</p>

                <Typography variant="h2" color="black" className="mb-6 font-black">Informations de contact :</Typography>
                <p>Si vous souhaitez nous contacter pour comprendre davantage la présente politique ou si vous souhaitez nous contacter concernant toute question relative aux droits individuels et à vos informations personnelles, vous pouvez envoyer un courriel à james_ahmedaly@yahoo.com.</p>

            </div>

        
        </>
    )
}

export default Politique