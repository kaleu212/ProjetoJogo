const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Behaviors.Pin,
		C3.Plugins.Audio,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Cnds.OnLayoutStart
	];
};
self.C3_JsPropNameTable = [
	{background: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{player: 0},
	{chao: 0},
	{Toque: 0},
	{Mouse: 0},
	{Teclado: 0},
	{baconDown: 0},
	{baconUp: 0},
	{Fixar: 0},
	{Texto: 0},
	{Áudio: 0},
	{pontos: 0}
];

self.InstanceType = {
	background: class extends self.ISpriteInstance {},
	player: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	Toque: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Teclado: class extends self.IInstance {},
	baconDown: class extends self.ISpriteInstance {},
	baconUp: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Áudio: class extends self.IInstance {}
}