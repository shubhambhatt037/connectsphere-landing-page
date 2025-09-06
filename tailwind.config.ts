import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'satoshi': ['Satoshi', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'space-grotesk': ['Space Grotesk', 'sans-serif'],
				'sans': ['Satoshi', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'cosmic': {
					start: 'hsl(var(--cosmic-start))',
					mid: 'hsl(var(--cosmic-mid))',
					end: 'hsl(var(--cosmic-end))'
				},
				'accent-blue': {
					DEFAULT: 'hsl(var(--accent-blue))',
					hover: 'hsl(var(--accent-blue-hover))'
				},
				'text-gray': 'hsl(var(--text-gray))',
				'bluish-gray': 'hsl(var(--bluish-gray))',
				'feature': {
					blue: 'hsl(var(--feature-blue))',
					violet: 'hsl(var(--feature-violet))',
					teal: 'hsl(var(--feature-teal))',
					indigo: 'hsl(var(--feature-indigo))'
				},
				'ai': {
					glow: 'hsl(var(--ai-glow))',
					secondary: 'hsl(var(--ai-secondary))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'cosmic-gradient': 'var(--gradient-cosmic)',
				'section-gradient': 'var(--gradient-section)',
				'section-overlay': 'var(--gradient-section-overlay)',
				'glow-gradient': 'var(--gradient-glow)',
				'text-gradient': 'var(--gradient-text)',
				'button-gradient': 'var(--gradient-button)',
				'icon-gradient': 'var(--gradient-icon)',
				'glass-gradient': 'var(--gradient-glass)',
				'mesh-gradient': 'var(--gradient-mesh)',
				'glass-blue': 'var(--gradient-glass-blue)',
				'glass-violet': 'var(--gradient-glass-violet)',
				'glass-teal': 'var(--gradient-glass-teal)',
				'glass-indigo': 'var(--gradient-glass-indigo)',
				'ai-special': 'var(--gradient-ai-special)',
				'icon-blue': 'var(--gradient-icon-blue)',
				'icon-violet': 'var(--gradient-icon-violet)',
				'icon-teal': 'var(--gradient-icon-teal)',
				'icon-indigo': 'var(--gradient-icon-indigo)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'hero': 'var(--shadow-hero)',
				'glass': 'var(--shadow-glass)',
				'button-glow': 'var(--shadow-button-glow)',
				'text-glow': 'var(--shadow-text-glow)',
				'badge-glow': 'var(--shadow-badge-glow)',
				'card-stack': 'var(--shadow-card-stack)',
				'card-blue': 'var(--shadow-card-blue)',
				'card-violet': 'var(--shadow-card-violet)',
				'card-teal': 'var(--shadow-card-teal)',
				'card-indigo': 'var(--shadow-card-indigo)',
				'ai-glow': 'var(--shadow-ai-glow)',
				'card-hover': 'var(--shadow-card-hover)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--accent-blue) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--accent-blue) / 0.6)'
					}
				},
				'underline-expand': {
					'0%': {
						transform: 'scaleX(0)'
					},
					'100%': {
						transform: 'scaleX(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'tilt-hover': {
					'0%': {
						transform: 'perspective(400px) rotateX(0deg) rotateY(0deg)'
					},
					'100%': {
						transform: 'perspective(400px) rotateX(5deg) rotateY(-5deg)'
					}
				},
				'particle-float': {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1)',
						opacity: '0.3'
					},
					'33%': {
						transform: 'translate(30px, -30px) scale(1.1)',
						opacity: '0.6'
					},
					'66%': {
						transform: 'translate(-20px, -60px) scale(0.9)',
						opacity: '0.4'
					}
				},
				'card-flip-out': {
					'0%': {
						transform: 'rotateY(0deg) translateZ(0px)',
						opacity: '1'
					},
					'50%': {
						transform: 'rotateY(-90deg) translateZ(50px)',
						opacity: '0.7'
					},
					'100%': {
						transform: 'rotateY(-180deg) translateZ(0px)',
						opacity: '0'
					}
				},
				'card-slide-up': {
					'0%': {
						transform: 'translateY(60px) rotateX(15deg)',
						opacity: '0.8',
						zIndex: '1'
					},
					'100%': {
						transform: 'translateY(0px) rotateX(0deg)',
						opacity: '1',
						zIndex: '10'
					}
				},
				'card-stack-entrance': {
					'0%': {
						transform: 'translateY(120px) rotateX(25deg) scale(0.9)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0px) rotateX(0deg) scale(1)',
						opacity: '1'
					}
				},
				'gentle-glow-pulse': {
					'0%, 100%': {
						boxShadow: 'var(--shadow-card-stack)'
					},
					'50%': {
						boxShadow: 'var(--shadow-card-hover)'
					}
				},
				'card-tilt': {
					'0%': {
						transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
					},
					'100%': {
						transform: 'perspective(1000px) rotateX(2deg) rotateY(-3deg) rotateZ(1deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'underline-expand': 'underline-expand 0.3s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'tilt-hover': 'tilt-hover 0.3s ease-out',
				'particle-float': 'particle-float 8s ease-in-out infinite',
				'card-flip-out': 'card-flip-out 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'card-slide-up': 'card-slide-up 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
				'card-stack-entrance': 'card-stack-entrance 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
				'gentle-glow-pulse': 'gentle-glow-pulse 4s ease-in-out infinite',
				'card-tilt': 'card-tilt 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
