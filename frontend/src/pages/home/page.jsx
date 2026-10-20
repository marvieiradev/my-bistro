import Dessert from '../../../public/imgs/home/dessert'
import NaturalFood from '../../../public/imgs/home/naturalFood'
import Vegetable from '../../../public/imgs/home/vegetable'
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Button } from '../../components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-2! p-2!">
      <section>
        <h1>Bem vindo ao My Bistrô</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sit.
          Aspernatur libero facilis fugit officia deserunt unde veniam
          consectetur nam eius ratione? Quaerat saepe dolorum magni, a enim
          reiciendis corrupti.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 bg-black text-white p-2! gap-2!">
        <div>
          <i>
            <NaturalFood />
          </i>
          <h4>Excellence in Everyday Life</h4>
          <p>
            Discover our daily selection of unique dishes to add a fresh and
            refined touch to your table.
          </p>
        </div>
        <div>
          <i>
            <Vegetable />
          </i>
          <h4>First Choice Ingredients</h4>
          <p>
            We carefully select exceptional ingredients to ensure the highest
            quality in your favorite dishes.
          </p>
        </div>
        <div>
          <i>
            <Dessert />
          </i>
          <h4>Taste for Everyone</h4>
          <p>
            Explore a world of flavors with our comprehensive offering, designed
            to satisfy the palates of the whole family, from appetizers to
            desserts.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-2!">
        <h1>Stay Updated!</h1>
        <p>
          Enter the world of My Gastronomy by following us on social media.
          You'll always be updated on our culinary creations, special events,
          and gourmet surprises. Don't miss out on a single bite!
        </p>
        <div className="flex flex-col md:flex-row w-full justify-around gap-2!">
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
