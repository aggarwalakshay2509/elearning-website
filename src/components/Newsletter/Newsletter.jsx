import React from "react";
import "./newsletter.css";
import { Container} from "reactstrap";

const Newsletter = () => {
  return (
    <section className="NewsSubs">
      <Container className="newsletter">
          <div className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
              <input type="text" placeholder="Email" />
              <button className="btn">Subscribe</button>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;