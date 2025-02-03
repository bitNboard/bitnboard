const blogList = [
  {
    id: 1,
    title: "How does an eclipse attack work?",
    description: "An eclipse attack is a cyberthreat where an attacker isolates a victim node by taking control of its network communication. This attack allows the attacker to manipulate the victim’s traffic, potentially leading to further malicious activities. The blog explores strategies to prevent such attacks, including peer discovery, Sybil attack resistance, randomized node selection, and secure communication protocols.",
    template: `
      <h2 id="introduction" class="text-3xl font-Inter font-semibold my-4 mt-16">Introduction</h2>
      <p class="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter">
        An eclipse attack is a type of cyberattack in which the attacker seizes control of the communication 
        channels between a victim node and its surrounding nodes. By positioning themselves between the victim 
        and the rest of the network, the attacker effectively "eclipses" the victim...
      </p>

      <h2 id="methods-used" class="text-3xl font-Inter font-semibold my-4">Methods Used</h2>
      <ul class="list-disc pl-6 text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter marker:text-black">
        <li>Peer Discovery</li>
        <li>Sybil Attack Resistance</li>
        <li>Randomized Node Selection</li>
        <li>Network Monitoring</li>
        <li>Secure Communication Protocols</li>
      </ul>

      <hr class="border border-t-[1px] border-[#e5e7eb] my-8" />

      <h2 id="peer-discovery" class="text-3xl font-Inter font-semibold my-4">Peer Discovery</h2>
      <p class="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter">
        The peer discovery strategy aims to mitigate eclipse attacks by
        implementing decentralized mechanisms that allow nodes to discover
        and connect with a diverse range of peers. Relying on a small
        group of malicious nodes is risky, but ensuring that nodes connect
        to a variety of network participants reduces this risk. By
        diversifying connections, the likelihood of an attacker
        successfully isolating the victim and manipulating its network
        traffic decreases.
      </p>

      <hr class="border border-t-[1px] border-[#e5e7eb] my-8" />

      <h2 id="sybil-resistance" class="text-3xl font-Inter font-semibold my-4">
        Sybil Attack Resistance
      </h2>
      <p class="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter">
        Sybil attack resistance mechanisms are designed to prevent an
        attacker from creating multiple nodes and gaining significant
        control over the network. By requiring nodes to prove their stake
        or computational power using mechanisms like Proof-of-Work (PoW)
        or Proof-of-Stake (PoS), attackers are hindered from establishing
        a large number of malicious nodes. This minimizes the risk of
        isolating and controlling victim nodes during an eclipse attack.
      </p>

      <hr class="border border-t-[1px] border-[#e5e7eb] my-8" />

      <h2 id="randomized-selection" class="text-3xl font-Inter font-semibold my-4">
        Randomized Node Selection
      </h2>
      <p class="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter">
        Randomized node selection involves a victim node choosing
        communication peers randomly instead of relying on a fixed group
        of predetermined nodes. This method reduces the chance of an
        attacker controlling the victim’s routing path and prevents the
        isolation necessary for a successful eclipse attack. Randomized
        selection ensures a variety of communication partners, making it
        more challenging for attackers to intercept and manipulate
        traffic.
      </p>

      <hr class="border border-t-[1px] border-[#e5e7eb] my-8" />

      <h2 id="network-monitoring" class="text-3xl font-Inter font-semibold my-4">
        Network Monitoring
      </h2>
      <p class="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter">
        Network monitoring involves observing and analyzing network
        activity to detect and prevent eclipse attacks. Administrators can
        identify signs of an attack, such as one node dominating
        communication or unusual traffic concentrations. Real-time
        monitoring tools, such as intrusion detection systems, help detect
        attacks early and allow the implementation of appropriate
        countermeasures.
      </p>
      <hr class="border border-t-[1px] border-[#e5e7eb] my-8" />

      <h2 id="secure-protocols" class="text-3xl font-Inter font-semibold my-4">
        Secure Communication Protocols
      </h2>
      <p class="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter">
        Secure communication protocols protect the privacy, integrity, and
        authenticity of communication channels within the network. By
        using encryption and authentication, attackers attempting to
        intercept and modify messages are thwarted. Encrypted data is
        indecipherable to attackers, while authentication verifies that
        nodes are trustworthy, reducing the risk of malicious
        intervention.
      </p>
    <hr class="border border-t-[1px] border-[#e5e7eb] my-8" />

    <section>
      <h2 id="conclusion" class="text-3xl font-Inter font-semibold my-4">
        Conclusion
      </h2>
      <p class="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-16 font-Inter">
        An eclipse attack is a serious cyberthreat where an attacker
        disrupts communication channels between a victim node and its
        surrounding nodes. By strategically positioning themselves,
        attackers can isolate and manipulate the victim’s network traffic.
        To defend against this, blockchain networks must implement
        strategies like secure communication protocols, peer discovery,
        Sybil attack resistance, randomized node selection, and network
        monitoring. These strategies collectively enhance security and
        mitigate the risk of eclipse attacks, safeguarding the integrity
        of the network.
      </p>
    </section>
      `,
    date: "February 3, 2025",
    imageUrl: "https://voidzero.dev/covers/pledge.jpg",
    headings: [
      { id: "introduction", title: "Introduction" },
      { id: "methods-used", title: "Methods Used" },
      { id: "peer-discovery", title: "Peer Discovery" },
      { id: "sybil-resistance", title: "Sybil Attack Resistance" },
      { id: "randomized-selection", title: "Randomized Node Selection" },
      { id: "network-monitoring", title: "Network Monitoring" },
      { id: "secure-protocols", title: "Secure Communication Protocols" },
      { id: "conclusion", title: "Conclusion" }
    ],
  },
];

export default blogList;
