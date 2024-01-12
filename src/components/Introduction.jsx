import React from "react";
import { Card } from "antd";

const Introduction = () => {
  return (
    <Card
      className="shadow hover:shadow-md text-justify mb-4 font-[Mukta]"
      title="PRESENTACIÓN"
      style={{
        backgroundImage:
          "linear-gradient(to right, #FDFEFE, rgba(212, 234, 247, 0.3))",
      }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ex aliquam
        voluptatum et ea laboriosam libero itaque, excepturi non laborum maxime
        illo nemo ratione maiores modi eligendi fugit perferendis voluptate?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit beatae
        non ullam rem cupiditate animi, exercitationem porro nulla quibusdam
        reprehenderit neque temporibus numquam corrupti doloribus eius, nemo,
        iure ex? Id.
      </p>
    </Card>
  );
};

export default Introduction;
