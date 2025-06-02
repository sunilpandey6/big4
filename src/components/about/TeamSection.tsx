import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ganesh',
    role: 'Senior Partner',
    image: '/Asset/gn.jpeg',
    description: 'Expert in corporate taxation and financial planning with over a deacde years of experience.'
  },
  {
    name: 'Prakash',
    role: 'Partner',
    image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Helping You Unlock Growth with Expert Financial Solutions and Strategic Insights.'
  },
  {
    name: 'Prakriti Aryal',
    role: 'Partner',
    image: '/Asset/pa.jpeg',
    linkedin: (<a href="https://www.linkedin.com/in/prakriti-aryal-54a958182" className="hover:text-blue-300 transition-colors">
                <Linkedin className="h-6 w-6 text-purple-400" />
              </a>),
    description: 'A CA finalist with a specialization in Financial Projections and Feasibility Analysis. I have been recognized with multiple Elocution awards by ICAN, served as a panelist at the CA Student Conference in Colombo, and recently led a session on “Attributes of Vibrant Accounting” at an NCASA & ICAN conference.'
  }
];

const TeamSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat text-[#002B5B]">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-montserrat text-[#002B5B]">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
                <p className="text-gray-700"> {member.linkedin}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;