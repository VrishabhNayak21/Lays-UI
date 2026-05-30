import React, { useEffect, useRef } from 'react';

export default function FlavorParticles({ flavor }) {
  const canvasRef = useRef(null);

  // Particles config per flavor
  const flavorConfig = {
    blue: {
      colors: ['#5F8DD3', '#83A6DD', '#E5A93C', '#C23D25', '#F5E4B5'],
      shapes: ['chip', 'circle', 'spice'],
    },
    red: {
      colors: ['#FF6A3C', '#FF8A65', '#D32F2F', '#388E3C', '#F5E4B5'],
      shapes: ['chip', 'tomato', 'leaf'],
    },
    green: {
      colors: ['#02654B', '#017659', '#81C784', '#FFF8E1', '#E8F5E9'],
      shapes: ['chip', 'circle', 'onion'],
    },
    white: {
      colors: ['#797B7C', '#8C8E92', '#C23D25', '#CFD8DC', '#FFF'],
      shapes: ['chip', 'chili', 'flake'],
    },
    yellow: {
      colors: ['#FFB61D', '#FFCC5E', '#FFF59D', '#F57C00', '#FFF'],
      shapes: ['chip', 'circle', 'salt'],
    },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const handleResize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    class Particle {
      constructor(isExplosion = false) {
        this.x = isExplosion ? canvas.width / 2 + 100 : Math.random() * canvas.width;
        this.y = isExplosion ? canvas.height / 2 : Math.random() * canvas.height;
        this.size = Math.random() * 8 + 4;
        
        const config = flavorConfig[flavor] || flavorConfig.blue;
        this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
        this.shape = config.shapes[Math.floor(Math.random() * config.shapes.length)];
        
        if (isExplosion) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 8 + 2;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed;
        } else {
          this.vx = (Math.random() - 0.5) * 0.8;
          this.vy = -Math.random() * 0.6 - 0.2; // float upwards
        }
        
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.isExplosion = isExplosion;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5;

        if (this.shape === 'chip') {
          // Draw a curved potato chip shape
          ctx.beginPath();
          ctx.ellipse(0, 0, this.size * 1.3, this.size * 0.7, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.shape === 'tomato' || this.shape === 'chili') {
          // Little organic spice teardrop
          ctx.beginPath();
          ctx.moveTo(0, -this.size);
          ctx.quadraticCurveTo(this.size * 0.7, 0, 0, this.size);
          ctx.quadraticCurveTo(-this.size * 0.7, 0, 0, -this.size);
          ctx.fill();
        } else if (this.shape === 'onion') {
          // Hollow onion ring slice
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          // Salt crystal or simple round flake
          ctx.beginPath();
          ctx.rect(-this.size/2, -this.size/2, this.size, this.size);
          ctx.fill();
        }

        ctx.restore();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;
        
        if (this.isExplosion) {
          this.vy += 0.1; // gravity for explosion particles
          this.vx *= 0.98;
          this.vy *= 0.98;
          this.opacity -= 0.015;
        } else {
          // Ambient float reset
          if (this.y < -20) {
            this.y = canvas.height + 20;
            this.x = Math.random() * canvas.width;
          }
        }
      }
    }

    // Trigger instant burst of explosion particles on load or flavor switch
    for (let i = 0; i < 40; i++) {
      particles.push(new Particle(true));
    }

    // Add ambient background floating particles
    for (let i = 0; i < 20; i++) {
      particles.push(new Particle(false));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles = particles.filter(p => p.opacity > 0);
      
      // If explosion particles die out, refill ambient ones slowly
      if (particles.filter(p => !p.isExplosion).length < 20) {
        particles.push(new Particle(false));
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [flavor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70"
    />
  );
}
