import '@/scss/style.scss';
import '@/styles/plugins/bootstrap-grid.css';
import '@/styles/plugins/font-awesome.min.css';
import '@/styles/plugins/swiper.min.css';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <main className="">
                    {children}
                </main>
            </body>
        </html>
    );
}
