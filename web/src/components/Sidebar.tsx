import React from 'react';
import mapMarkerImg from '../assets/map.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router';

import '../styles/components/sidebar.css';

export default function Sidebar() {
  const { goBack } = useHistory()

  return (
    <div>
      <aside className="app-sidebar">
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    </div>
  )
}
