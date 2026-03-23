interface SpacerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Spacer({ size = 'md' }: SpacerProps) {
  const sizeMap = {
    sm: 'h-8',
    md: 'h-16',
    lg: 'h-24',
    xl: 'h-32',
  };

  return <div className={sizeMap[size]} />;
}
