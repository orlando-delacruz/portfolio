import { IoMail, IoCall, IoLocation, IoTime } from 'react-icons/io5';

const contactInfoData = {
  heading: {
    pretitle: 'CONTACT INFORMATION',
    title: 'Get in Touch',
    highlight: 'With Me',
    ariaLabel: 'Contact information',
  },
  cards: [
    {
      id: 'email',
      icon: IoMail,
      title: 'Email',
      value: 'orlando.delacruz.dev@gmail.com',
      href: 'mailto:orlando.delacruz.dev@gmail.com',
      description: 'I\'ll get back to you within 24 hours.',
    },
    {
      id: 'phone',
      icon: IoCall,
      title: 'Phone',
      value: '+63 909 598 4478',
      href: 'tel:+639095984478',
      description: 'Available for urgent inquiries.',
    },
    {
      id: 'location',
      icon: IoLocation,
      title: 'Location',
      value: 'San Antonio, Quezon, Philippines',
      href: 'https://maps.google.com/?q=San+Antonio+Quezon+Philippines',
      description: 'Open to remote and on-site opportunities.',
    },
    {
      id: 'availability',
      icon: IoTime,
      title: 'Availability',
      value: 'Open for Opportunities',
      description: 'Freelance · Internship · Full-time',
    },
  ],
};

export default contactInfoData;