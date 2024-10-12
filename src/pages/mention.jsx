import { Footer, Navbar } from "@/widgets/layout"
import routes from "@/routes";
import { Typography } from "@material-tailwind/react";

function Mention(){
    return(
        <>
        <div className="bg-black flex justify-center mb-7">
            <Navbar routes={routes}/>
        </div>
        <div className="text-center container mx-auto">
            <div className="">
                <Typography variant="h1" color="black" className="mb-6 font-black">
                    Mentions légales

                </Typography>
                <Typography variant="h2" color="black" className="mb-6 font-black">Définitions</Typography >
                <p><b>Client :</b> tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.<br />
                <b>Prestations et Services :</b> <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> met à disposition des Clients :</p>

                <p><b>Contenu :</b> Ensemble des éléments constituants l’information présente sur le Site, notamment textes – images – vidéos.</p>

                <p><b>Informations clients :</b> Ci après dénommé « Information (s) » qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.</p>

                <p><b>Utilisateur :</b> Internaute se connectant, utilisant le site susnommé.</p>
                <p><b>Informations personnelles :</b> « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
                <p>Les termes « données à caractère personnel », « personne concernée », « sous-traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>

                <Typography variant="h2" color="black" className="mb-6 font-black">1. Présentation du site internet.</Typography >
                <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:</p>
                
                <p>
                    <strong>Propriétaire</strong> : Ahmedaly James –  <br />
                    <strong>Responsable publication</strong> : Ahmedaly James – james_ahmedaly@yahoo.com<br />
                    Le responsable publication est une personne physique ou une personne morale.<br />
                    <strong>Webmaster</strong> : Ahmedaly James – james_ahmedaly@yahoo.com<br />
                    <strong>Hébergeur</strong> : o2switch – Chem. des Pardiaux 63000 Clermont-Ferrand 04 44 44 60 40<br />
                    <strong>Délégué à la protection des données</strong> : James Ahmedaly – james_ahmedaly@yahoo.com<br />
                </p>

                <div dangerouslySetInnerHTML={{
                    __html: `
                    <p>Ces mentions légales RGPD sont issues du 
                        <a href="https://fr.orson.io/1371/generateur-mentions-legales" title="générateur gratuit de mentions légales pour un site internet">
                        générateur gratuit de mentions légales pour un site internet
                        </a>
                    </p>
                    `
                }}></div>

                <Typography variant="h2" color="black" className="mb-6 font-black">2. Conditions générales d’utilisation du site et des services proposés.</Typography >
                <p>Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.</p>
                
                <p>L’utilisation du site <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> sont donc invités à les consulter de manière régulière.</p>


                <Typography variant="h2" color="black" className="mb-6 font-black">7. Gestion des données personnelles.</Typography >
                <p>Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>

                <Typography variant="h3" color="black" className="mb-6 font-black">7.1 Responsables de la collecte des données personnelles</Typography>
                <p>Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l’Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : Ahmedaly James. <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> est représenté par Ahmedaly James, son représentant légal.</p>

                </div>
                <div>
                <p>
                    <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d’analyses.
                </p>

                <Typography variant="h3" color="black" className="mb-6 font-black">7.3 Droit d’accès, de rectification et d’opposition</Typography>

                <p>
                    Conformément à la réglementation européenne en vigueur, les Utilisateurs de <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> disposent des droits suivants :
                </p>
                <ol>
                    <li>
                        droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs droit de verrouillage ou d’effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD), lorsqu’elles sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l'utilisation, la communication ou la conservation est interdite.
                    </li>
                    <li>droit de retirer à tout moment un consentement (article 13-2c RGPD)</li>
                    <li>droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD)</li>
                    <li>droit d’opposition au traitement des données des Utilisateurs (article 21 RGPD)</li>
                    <li>droit à la portabilité des données que les Utilisateurs auront fournies, lorsque ces données font l’objet de traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD)</li>
                    <li>droit de définir le sort des données des Utilisateurs après leur mort et de choisir à qui <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> devra communiquer (ou non) ses données à un tiers qu’ils auront préalablement désigné.</li>
                </ol>

                <p>
                    Dès que <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> a connaissance du décès d’un Utilisateur et à défaut d’instructions de sa part, <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> s’engage à détruire ses données, sauf si leur conservation s’avère nécessaire à des fins probatoires ou pour répondre à une obligation légale.
                </p>

                <p>
                    Si l’Utilisateur souhaite savoir comment <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> utilise ses Données Personnelles, demander à les rectifier ou s’oppose à leur traitement, l’Utilisateur peut contacter <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> par écrit à l’adresse suivante :
                </p>

                <p>
                    Ahmedaly James – DPO, James Ahmedaly
                </p>
                <p>
                     .
                </p>

                <p>
                    Dans ce cas, l’Utilisateur doit indiquer les Données Personnelles qu’il souhaiterait que <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> corrige, mette à jour ou supprime, en s’identifiant précisément avec une copie d’une pièce d’identité (carte d’identité ou passeport).
                </p>

                <p>
                    Les demandes de suppression de Données Personnelles seront soumises aux obligations qui sont imposées à <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> par la loi, notamment en matière de conservation ou d’archivage des documents. Enfin, les Utilisateurs de <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> peuvent déposer une réclamation auprès des autorités de contrôle, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).
                </p>

                <Typography variant="h3" color="black" className="mb-6 font-black">7.4 Non-communication des données personnelles</Typography>

                <p>
                    <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> s’interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l’Union européenne ou reconnu comme « non adéquat » par la Commission européenne sans en informer préalablement le client. Pour autant, <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> reste libre du choix de ses sous-traitants techniques et commerciaux à la condition qu’ils présentent les garanties suffisantes au regard des exigences du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
                </p>

                <p>
                    <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> s’engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations et notamment qu’elles ne soient pas communiquées à des personnes non autorisées. Cependant, si un incident impactant l’intégrité ou la confidentialité des Informations du Client est porté à la connaissance de <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a>, celle-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs, <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> ne collecte aucune « données sensibles ».
                </p>

                <p>
                    Les Données Personnelles de l’Utilisateur peuvent être traitées par des filiales de <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> et des sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la présente politique.
                </p>
                <p>
                    Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus, les principales personnes susceptibles d’avoir accès aux données des Utilisateurs de <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> sont principalement les agents de notre service client.
                </p>

                <div ng-bind-html="rgpdHTML"></div>

                <Typography variant="h2" color="black" className="mb-6 font-black">8. Notification d’incident</Typography >
                <p>
                    Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n'est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue.
                </p>
                <p>
                    Si nous prenions connaissance d'une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu'ils puissent prendre les mesures appropriées. Nos procédures de notification d’incident tiennent compte de nos obligations légales, qu'elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.
                </p>
                <p>
                    Aucune information personnelle de l'utilisateur du site <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a>.
                </p>

                <Typography variant="h3" color="black" className="mb-6 font-black">Sécurité</Typography>

                <p>
                    Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données Personnelles de Santé, <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> utilise des réseaux protégés par des dispositifs standards tels que par pare-feu, la pseudonymisation, l’encryption et mot de passe.
                </p>

                <p>
                    Lors du traitement des Données Personnelles, <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.
                </p>

                <Typography variant="h2" color="black" className="mb-6 font-black">9. Liens hypertextes « cookies » et balises (“tags”) internet</Typography >
                <p>
                    Le site <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a>. Cependant, <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.
                </p>
                <p>
                    En tout état de cause, <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> n’est pas responsable de l’indisponibilité des sites et ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu des sites tiers ou de l’utilisation de ces sites. Les Utilisateurs sont informés que lors de leurs visites sur le site <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a>, un ou plusieurs cookies sont susceptibles de s’installer automatiquement sur leur ordinateur par le biais de leur logiciel de navigation. Un cookie est un fichier de petite taille, qui ne permet pas d’identifier l’Utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur le site. Les données ainsi obtenues ont vocation à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
                </p>
                <p>
                    Les utilisateurs peuvent à tout moment désactiver les cookies par l’intermédiaire des paramètres figurant dans leur logiciel de navigation.
                </p>

                <Typography variant="h2" color="black" className="mb-6 font-black">10. Droit applicable et attribution de juridiction</Typography >
                <p>
                    Tout litige en relation avec l’utilisation du site <a href="https://james-ahmedaly.com">https://james-ahmedaly.com</a> est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                </p>

                <Typography variant="h2" color="black" className="mb-6 font-black">11. Contact</Typography >
                <p>
                    Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter :
                </p>
                <ul>
                    <li>
                        Par e-mail : <a href="mailto:james_ahmedaly@yahoo.com">james_ahmedaly@yahoo.com</a>
                    </li>
                    <li>
                        Par téléphone : +33 6 88 52 37 29
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Mention