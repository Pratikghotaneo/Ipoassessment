import React, { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const clampLine = isExpanded ? "" : "clamp";
  return (
    <div className="md:border rounded-xl p-5 mb-4">
      <h1 className="text-xl font-semibold text-gray-900">About the company</h1>
      <p
        className={`font-light text-gray-400 mt-3 ${clampLine} md:line-clamp-none`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore
        cumque inventore nam fugiat. Temporibus enim asperiores sapiente
        necessitatibus modi officia commodi saepe pariatur voluptatibus ratione,
        libero error atque dicta? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illum laboriosam earum, nobis unde reprehenderit eius
        tempora exercitationem consectetur at sit? Dolorem saepe tempore autem
        quae tempora asperiores architecto dicta vitae aliquam sint, obcaecati
        doloribus. Distinctio velit amet eos optio? Sapiente optio pariatur et
        alias ratione sint sequi molestias tenetur perspiciatis. <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae libero
        architecto repellendus sint dignissimos at cum doloribus modi eligendi
        ratione natus tempore magnam animi, vero accusantium quos temporibus
        molestiae debitis nesciunt omnis incidunt quasi. Dolor tenetur quae
        voluptatem voluptatibus quasi, voluptates veniam veritatis eaque
        aspernatur dolore sint deleniti aperiam iure quia, saepe mollitia quos
        provident. Facere dolorum eum dolorem illo esse officia sed consequuntur
        deleniti? Temporibus suscipit asperiores, dolorum incidunt repellat
        saepe, magni iste sed sequi, aliquid dolorem itaque repudiandae ipsam
        velit maiores nemo ratione earum libero eius. Sit illo laudantium alias
        maiores ratione, exercitationem numquam nostrum. Molestias,
        reprehenderit quisquam!
      </p>
      <span
        onClick={() => setIsExpanded((prev) => !prev)}
        className=" text-orange-500 cursor-pointer block md:hidden"
      >
        {isExpanded ? "read less" : "read more"}
      </span>
    </div>
  );
};

export default About;
