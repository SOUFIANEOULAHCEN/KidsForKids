import {
  Utensils,
  Palette,
  Bus,
  Languages,
  Droplet,
  Pencil,
} from "lucide-react";
import "./ServicesSection.css";
import banner from '../assets/ServicesSectionImg/banner-06.jpg'
const ServicesSection = () => {
  return (
    <div className="services-container">
      {/* What We Offer Section */}
      <section className="offer-section">
        <h2 className="section-title">WHAT WE OFFER</h2>
        <p className="section-subtitle">
          Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
          amet, consec
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="icon-wrapper red">
              <Utensils size={24} />
            </div>
            <div>
              <h3>Healthy Food</h3>
              <p>
                This is version of Lorem Ipsum. Proin gravida nibh vel velit
                auctor aliquet avida velit auctor aliquet.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-wrapper blue">
              <Palette size={24} />
            </div>
            <div>
            <h3>Painting Learning</h3>
            <p>
              This is version of Lorem Ipsum. Proin gravida nibh vel velit
              auctor aliquet avida velit auctor aliquet.
            </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-wrapper red">
              <Bus size={24} />
            </div>
            <div>
            <h3>Bus Service</h3>
            <p>
              This is version of Lorem Ipsum. Proin gravida nibh vel velit
              auctor aliquet avida velit auctor aliquet.
            </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-wrapper green">
              <Languages size={24} />
            </div>
            <div>
            <h3>Multi Language</h3>
            <p>
              This is version of Lorem Ipsum. Proin gravida nibh vel velit
              auctor aliquet avida velit auctor aliquet.
            </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-wrapper yellow">
              <Droplet size={24} />
            </div>
            <div>
            <h3>Colour Match</h3>
            <p>
              This is version of Lorem Ipsum. Proin gravida nibh vel velit
              auctor aliquet avida velit auctor aliquet.
            </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-wrapper purple">
              <Pencil size={24} />
            </div>
            <div>
            <h3>Sketching</h3>
            <p>
              This is version of Lorem Ipsum. Proin gravida nibh vel velit
              auctor aliquet avida velit auctor aliquet.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="facts-section">
        <h2 className="facts-title">FACTS AND FIGURE ABOUT KIDS CENTER</h2>
        <p className="facts-subtitle">
          Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
          amet, consec tetuer adipis elit, aliquam eget nibh etlibura.
        </p>

        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">2500</span>
            <span className="stat-label">Subjects</span>
            <div className="underline red"></div>
          </div>

          <div className="stat-item">
            <span className="stat-number">3000</span>
            <span className="stat-label">Modern lab</span>
            <div className="underline blue"></div>
          </div>

          <div className="stat-item">
            <span className="stat-number">3500</span>
            <span className="stat-label">Instructors</span>
            <div className="underline red"></div>
          </div>

          <div className="stat-item">
            <span className="stat-number">5500</span>
            <span className="stat-label">Students</span>
            <div className="underline green"></div>
          </div>
        </div>

        <div className="button-container">
          <button className="btn see-more">SEE MORE</button>
          <button className="btn buy-now">BUY NOW!</button>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
