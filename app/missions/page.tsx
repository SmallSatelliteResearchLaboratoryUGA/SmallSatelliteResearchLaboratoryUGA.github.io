"use client";

import { useEffect, useRef } from "react";
import "./missions.css";
import HeroSection from "../components/missions/HeroSection";
import MissionSection from "../components/missions/MissionSection";
import ResearchSection from "../components/missions/ResearchSection";
import { missions } from "./data";

export default function MissionsPage() {
    const particleCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const dustCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const bgLayerRef = useRef<HTMLDivElement | null>(null);
    const lightBeamRef = useRef<HTMLDivElement | null>(null);
    const blackHoleRef = useRef<HTMLDivElement | null>(null);
    const snapContainerRef = useRef<HTMLDivElement | null>(null);
    const progressDotRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const particleCanvas = particleCanvasRef.current;
        const dustCanvas = dustCanvasRef.current;
        const bgLayer = bgLayerRef.current;
        const lightBeam = lightBeamRef.current;
        const blackHole = blackHoleRef.current;
        const snapContainer = snapContainerRef.current;
        const progressDot = progressDotRef.current;

        if (
            !particleCanvas ||
            !dustCanvas ||
            !bgLayer ||
            !lightBeam ||
            !blackHole ||
            !snapContainer ||
            !progressDot
        ) {
            return;
        }

        const ctx = particleCanvas.getContext("2d");
        const dtx = dustCanvas.getContext("2d");

        if (!ctx || !dtx) return;

        let width = 0;
        let height = 0;
        let animationFrameId = 0;

        const mouse = { x: 0, y: 0 };
        const bhPos = { x: 0, y: 0 };

        class Particle {
            angle: number;
            distance: number;
            speed: number;
            size: number;
            opacity: number;
            x: number;
            y: number;

            constructor() {
                this.angle = Math.random() * Math.PI * 2;
                this.distance = Math.random() * 450 + 100;
                this.speed = Math.random() * 0.0006 + 0.0002;
                this.size = Math.random() * 1.2;
                this.opacity = Math.random() * 0.5;
                this.x = 0;
                this.y = 0;
            }

            update() {
                this.angle += this.speed;
                this.x = width / 2 + bhPos.x + Math.cos(this.angle) * this.distance;
                this.y = height / 2 + bhPos.y + Math.sin(this.angle) * this.distance;
            }

            draw(context: CanvasRenderingContext2D) {
                context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fill();
            }
        }

        class Dust {
            x: number;
            y: number;
            size: number;
            vx: number;
            vy: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * (width * 0.3);
                this.y = Math.random() * height;
                this.size = Math.random() * 1.5;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.4;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width * 0.35) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw(context: CanvasRenderingContext2D) {
                context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fill();
            }
        }

        const particles: Particle[] = [];
        const dustParticles: Dust[] = [];

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            particleCanvas.width = width;
            particleCanvas.height = height;
            dustCanvas.width = width;
            dustCanvas.height = height;
        };

        resize();

        for (let i = 0; i < 350; i++) particles.push(new Particle());
        for (let i = 0; i < 60; i++) dustParticles.push(new Dust());

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = (e.clientX - width / 2) * 0.04;
            mouse.y = (e.clientY - height / 2) * 0.04;
        };

        const handleScroll = () => {
            const scrollTop = snapContainer.scrollTop;
            const containerHeight = snapContainer.clientHeight;
            const scrollHeight = snapContainer.scrollHeight - containerHeight;
            const totalScrollPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

            bgLayer.style.opacity = `${Math.max(0, 1 - scrollTop / (containerHeight * 0.8))}`;

            if (scrollTop > containerHeight * 0.3) {
                lightBeam.style.opacity = "1";
                dustCanvas.style.opacity = "1";
            } else {
                lightBeam.style.opacity = "0";
                dustCanvas.style.opacity = "0";
            }

            const dotTop = 10 + totalScrollPercent * 80;
            progressDot.style.top = `${dotTop}%`;
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const observeFadeElements = () => {
            const fadeElements = snapContainer.querySelectorAll(".fade-in-element");
            fadeElements.forEach((el) => observer.observe(el));
        };

        observeFadeElements();

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            dtx.clearRect(0, 0, width, height);

            bhPos.x += (mouse.x - bhPos.x) * 0.03;
            bhPos.y += (mouse.y - bhPos.y) * 0.03;

            blackHole.style.transform = `translate(calc(-50% + ${bhPos.x}px), calc(-50% + ${bhPos.y}px))`;

            particles.forEach((p) => {
                p.update();
                p.draw(ctx);
            });

            dustParticles.forEach((d) => {
                d.update();
                d.draw(dtx);
            });

            animationFrameId = window.requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        snapContainer.addEventListener("mousemove", handleMouseMove);
        snapContainer.addEventListener("scroll", handleScroll);

        handleScroll();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            snapContainer.removeEventListener("mousemove", handleMouseMove);
            snapContainer.removeEventListener("scroll", handleScroll);
            observer.disconnect();
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <main className="missions-page-root">
            <div id="bg-layer" ref={bgLayerRef}>
                <div className="black-hole-void" ref={blackHoleRef} />
                <canvas id="particleCanvas" ref={particleCanvasRef} />
            </div>

            <div id="light-beam" ref={lightBeamRef} />
            <canvas id="dustCanvas" ref={dustCanvasRef} />

            <div className="global-timeline-track">
                <div className="vertical-track">
                    <div className="progress-dot" ref={progressDotRef} />
                </div>
            </div>

            <div className="snap-container" ref={snapContainerRef}>
                <HeroSection />

                {missions.map((mission) => (
                    <MissionSection key={mission.name} mission={mission} />
                ))}

                <ResearchSection />
            </div>

            <div className="global-footer">UGA SSRL</div>
        </main>
    );
}