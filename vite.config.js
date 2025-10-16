import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173, // 포트를 5173으로 고정
        strictPort: false, // 5173 포트가 사용 중일 경우 서버 종료
    },
})