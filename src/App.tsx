import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const targetDate = new Date('2023-11-30T10:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [showContent, setShowContent] = useState(false);

  function calculateTimeLeft(target: Date) {
    const now = new Date();
    const difference = Number(target)- Number(now);
    

    if (difference > 0) {
      return {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null;
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft === null && !showContent) {
        setShowContent(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, showContent]);

  const [clicked, setClicked] = useState({ mate: false, ocho: false, miercoles: false });
  const repoUrl = 'https://github.com/RockerFriend/tucu';

  const indicators = Object.values(clicked).map((isClicked, index) => (
    <div
      key={index}
      className={`indicator ${isClicked ? 'filled' : ''}`}
    />
  ));

  const handlePistaClick = (pista: string) => {
    setClicked({ ...clicked, [pista]: true });
  };

  const allClicked = Object.values(clicked).every(Boolean);

  


  const formatTime = (time: number) => time.toString().padStart(2, '0');

const timeLeftDisplay = timeLeft ?  
  `${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}` : 
  null;

  const poem = (
  <div className="space-y-4">
    <p className="text-lg leading-relaxed">En los pasillos, un aroma se dispersa,</p>
    <p className="text-lg leading-relaxed">de hojas verdes, y una tradición inmersa.</p>
    <p className="text-lg leading-relaxed">Cada día, en un ritual se convierte,</p>
    <p className="text-lg leading-relaxed">un compañero, el <strong className="cursor-pointer" onClick={() => handlePistaClick('mate')}>mate</strong> siempre ofrece.</p>
    <p className="text-lg leading-relaxed h-4"></p>
    <p className="text-lg leading-relaxed">Dentro de estas paredes, el tiempo ha volado,</p>
    <p className="text-lg leading-relaxed"><strong className="cursor-pointer" onClick={() => handlePistaClick('ocho')}>más de ocho</strong> lunas, un viaje ha narrado.</p>
    <p className="text-lg leading-relaxed">Experiencias y proyectos, en memoria se han tejido,</p>
    <p className="text-lg leading-relaxed">en este lugar, donde el tiempo ha sido invertido.</p>
    <p className="text-lg leading-relaxed h-4"></p>
    <p className="text-lg leading-relaxed">Cada semana, hay un día especial,</p>
    <p className="text-lg leading-relaxed">donde su presencia, es más que usual.</p>
    <p className="text-lg leading-relaxed">Los <strong className="cursor-pointer" onClick={() => handlePistaClick('miercoles')}>miércoles</strong> resuenan, con su risa y su paso,</p>
    <p className="text-lg leading-relaxed">un día señalado, en el calendario trazado.</p>
  </div>
);

  

  return (
    <div className="App">
      <header className="App-header">
        {timeLeftDisplay && (
          <motion.div
            animate={{ opacity: [0.8, 1], scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="text-4xl"
          >
            {timeLeftDisplay}
          </motion.div>
        )}
        {showContent && (
          <>
            {poem}
                    <div className="indicators">{indicators}</div>

                    {allClicked && <a href={repoUrl} target="_blank" rel="noopener noreferrer">:)</a>}
          </>
        )}
      </header>
    </div>
  );
}

export default App;

