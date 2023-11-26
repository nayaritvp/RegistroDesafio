import React from 'react';
import Card from 'react-bootstrap/Card';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

export const SocialButton = () => {
  return (
    <Card>
      <Card.Body>
        <h4>Crea Una Cuenta</h4>
        <CiFacebook size={50} style={{ marginRight: '10px' }} />
        <FaGithub size={50} style={{ marginRight: '10px' }} />
        <CiLinkedin size={50} />
      </Card.Body>
    </Card>
  );
};