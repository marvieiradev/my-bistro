import {
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-2! p-2! bg-foreground text-background max-w-300">
      <section>
        <h1 className="text-lg md:text-2xl font-bold text-center md:text-start mb-2!">
          Bem vindo ao My Bistrô
        </h1>
        <p className="text-center md:text-start mb-2!">
          Seja bem-vindo ao nosso cantinho gastronômico especial, onde a
          tradição italiana se une à criatividade moderna para lhe proporcionar
          uma experiência culinária única. Aqui, cada prato é um abraço em forma
          de sabor, criado com amor e dedicação para tornar cada um dos seus
          dias inesquecível.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 text-white p-2! gap-2!">
        <Card className="bg-background p-4!">
          <CardContent>
           <img src="imgs/home/natural.webp" alt="Comida Natural" />
            <h4 className="text-lg font-semibold text-center m-2!">
              Excelência no dia a dia
            </h4>
            <p className="text-center mb-2!">
              Descubra nossa seleção diária de pratos exclusivos para dar um
              toque fresco e refinado à sua mesa.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-background p-4!">
          <CardContent>
            <img src="imgs/home/vegetais.webp" alt="Vegetais" />
            <h4 className="text-lg font-semibold text-center m-2!">
              Ingredientes de Primeira Qualidade
            </h4>
            <p className="text-center mb-2!">
              Selecionamos cuidadosamente ingredientes excepcionais para
              garantir a mais alta qualidade em seus pratos favoritos.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-background p-4!">
          <CardContent>
            <img src="imgs/home/sobremesa.webp" alt="Sobremesa" />
            <h4 className="text-lg font-semibold text-center m-2!">
              Sabor para todos
            </h4>
            <p className="text-center mb-2!">
              Explore um mundo de sabores com nossa ampla variedade, pensada
              para agradar ao paladar de toda a família, de entradas a
              sobremesas.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-2! w-full">
        <h1 className="text-lg md:text-2xl font-bold text-center md:text-start mb-2!">
          Mantenha-se atualizado!
        </h1>
        <p className="text-center md:text-start mb-2!">
          Entre no universo do My Bistrô seguindo-nos nas redes sociais. Você
          ficará sempre por dentro das nossas criações culinárias, eventos
          especiais e surpresas gourmet. Não perca nem uma mordida!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2!">
          <Button className="w-full">
            <FaInstagram /> Instagram
          </Button>
          <Button className="w-full">
            <FaFacebookSquare /> Facebook
          </Button>
          <Button className="w-full">
            <FaWhatsapp /> Whatsapp
          </Button>
          <Button className="w-full">
            <FaMapMarkerAlt />
            Location
          </Button>
        </div>
      </section>
    </div>
  );
}
