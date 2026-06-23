import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { PillJourney } from '../components/sections/PillJourney';

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return { 
    ...actual,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>
  };
});

describe('PillJourney section', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('renders stage 1 (Dissolution) by default', () => {
    render(<PillJourney />);
    expect(screen.getAllByText(/Dissolution/i)[0]).toBeInTheDocument();
  });

  it('advances to next stage every 3.5 seconds on autoplay', async () => {
    render(<PillJourney />);
    act(() => { vi.advanceTimersByTime(3600); });
    expect(screen.getAllByText(/Absorption/i)[0]).toBeInTheDocument();
  });

  it('stops autoplay when user clicks a stage button', () => {
    render(<PillJourney />);
    const stageBtn = screen.getAllByRole('button')[1]; // stage 2
    fireEvent.click(stageBtn);
    act(() => { vi.advanceTimersByTime(3600); });
    // Should remain on stage 2 since autoplay was disabled
    expect(screen.getAllByText(/Absorption/i)[0]).toBeInTheDocument();
  });

  it('renders all 4 stage selector buttons', () => {
    render(<PillJourney />);
    const buttons = screen.getAllByRole('button');
    // 4 stage buttons exist
    expect(buttons.length).toBeGreaterThanOrEqual(4);
  });
});
