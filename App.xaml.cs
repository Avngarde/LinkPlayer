using Avalonia;
using Avalonia.Markup.Xaml;

namespace MusicPlayah
{
    public class App : Application
    {
        public override void Initialize()
        {
            AvaloniaXamlLoader.Load(this);
        }
    }
}
