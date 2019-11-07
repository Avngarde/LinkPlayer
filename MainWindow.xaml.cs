﻿using Avalonia;
using Avalonia.Controls;
using Avalonia.Markup.Xaml;

namespace MusicPlayah
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
            this.MaxWidth = 500;
            AvaloniaXamlLoader.Load(this);
        }
    }
}
