"use client"

import type React from "react"
import { useState, useRef } from "react"
import { GradientBackground } from "./gradient-background"
import { Button } from "./button"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Link } from "react-router-dom"
import { ArrowLeft, Mail } from "lucide-react"
import { SimpleThemeToggle } from "../theme-toggle"

const forgotPasswordGradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
]

export function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerify = async () => {
    const otpCode = otp.join("")
    if (otpCode.length !== 4) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)

    console.log("OTP verified:", otpCode)
  }

  const handleResend = () => {
    console.log("Resending OTP...")
  }

  return (
    <GradientBackground 
      gradients={forgotPasswordGradients}
      animationDuration={10}
      overlay={true}
      overlayOpacity={0.2}
    >
      <div className="absolute top-4 right-4">
        <SimpleThemeToggle />
      </div>
      <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm border-border/50">
        <CardHeader className="text-center space-y-4">
          <Link 
            to="/login" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors self-start"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-semibold">Código de Verificação</CardTitle>
          <p className="text-muted-foreground text-sm">
            Enviamos um código de verificação para
            <br />
            <span className="text-foreground font-medium">seu@email.com</span>
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-medium border border-input bg-background rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200"
              />
            ))}
          </div>

          <div className="text-center">
            <span className="text-muted-foreground text-sm">Não recebeu o código? </span>
            <button
              onClick={handleResend}
              className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
            >
              Reenviar
            </button>
          </div>

          <Button 
            onClick={handleVerify} 
            disabled={isLoading || otp.join("").length !== 4}
            className="w-full"
          >
            {isLoading ? "Verificando..." : "Verificar Código"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Ao continuar, você concorda com nossos{" "}
            <button className="text-primary hover:text-primary/80 underline transition-colors">
              Termos de Serviço
            </button>{" "}
            e{" "}
            <button className="text-primary hover:text-primary/80 underline transition-colors">
              Política de Privacidade
            </button>
          </p>
        </CardContent>
      </Card>
    </GradientBackground>
  )
}