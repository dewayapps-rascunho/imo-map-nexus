import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'

interface AssistedPasswordConfirmationProps {
  password: string;
  value: string;
  onChange: (value: string) => void;
  name?: string;
  id?: string;
  required?: boolean;
}

export function AssistedPasswordConfirmation({
  password,
  value,
  onChange,
  name,
  id = 'confirmPassword',
  required = false
}: AssistedPasswordConfirmationProps) {
  const [shake, setShake] = useState(false)

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (
      value.length >= password.length &&
      e.target.value.length > value.length
    ) {
      setShake(true)
    } else {
      onChange(e.target.value)
    }
  }

  useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => setShake(false), 500)
      return () => clearTimeout(timer)
    }
  }, [shake])

  const getLetterStatus = (letter: string, index: number) => {
    if (!value[index]) return ''
    return value[index] === letter
      ? 'bg-green-500/20'
      : 'bg-red-500/20'
  }

  const passwordsMatch = password === value && value.length > 0

  const bounceAnimation = {
    x: shake ? [-10, 10, -10, 10, 0] : 0,
    transition: { duration: 0.5 },
  }

  const matchAnimation = {
    scale: passwordsMatch ? [1, 1.05, 1] : 1,
    transition: { duration: 0.3 },
  }

  const borderAnimation = {
    borderColor: passwordsMatch ? '#10B981' : '#d1d5db',
    transition: { duration: 0.3 },
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Confirmar Senha</Label>
      {password && (
        <div className="text-xs text-muted-foreground mb-2">
          → {password.replace(/./g, '•')}
        </div>
      )}
      <motion.div
        className="relative h-[40px] w-full rounded-md border-2 bg-background px-2 py-1"
        animate={{
          ...bounceAnimation,
          ...borderAnimation,
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-sm">
          <div className="z-10 flex h-full items-center justify-start bg-transparent px-1 tracking-[0.15em]">
            {password.split('').map((_, index) => (
              <div
                key={index}
                className="flex h-full w-3 shrink-0 items-center justify-center"
              >
                <span className="size-[3px] rounded-full bg-foreground/40"></span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 top-0 z-0 flex h-full w-full items-center justify-start pl-1">
            {password.split('').map((letter, index) => (
              <motion.div
                key={index}
                className={`absolute h-full w-3 transition-all duration-300 ${getLetterStatus(
                  letter,
                  index,
                )}`}
                style={{
                  left: `${index * 12 + 4}px`,
                  scaleX: value[index] ? 1 : 0,
                  transformOrigin: 'left',
                }}
              ></motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        type="password"
        placeholder="Digite a senha novamente"
        value={value}
        onChange={handleConfirmPasswordChange}
        name={name}
        id={id}
        required={required}
        animate={{
          borderColor: passwordsMatch ? '#10B981' : undefined,
          transition: { duration: 0.3 },
        }}
      />
    </div>
  )
}