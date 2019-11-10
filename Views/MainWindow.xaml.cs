using Avalonia;
using Avalonia.Controls;
using Avalonia.Interactivity;
using Avalonia.Markup.Xaml;
using System;

namespace MusicPlayah.Views
{
    public class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
#if DEBUG
            this.AttachDevTools();
#endif
        }
        private void InitializeComponent()
        {
            this.CanResize = false;
            this.MaxHeight = 600;
            this.MinHeight = 600;
            this.MaxWidth = 500;
            this.MinWidth = 500;
            AvaloniaXamlLoader.Load(this);
        }

        private void OnButtonClick(object sender, RoutedEventArgs e)
        {
            Console.WriteLine("U mom gei!!!");
        }
    }
}
